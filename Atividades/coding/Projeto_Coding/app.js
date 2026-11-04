// --- ESTADO DA APLICAÇÃO ---
let ordensDeServico = [];
let idCounter = 1;

// --- DADOS DINÂMICOS DO FORMULÁRIO ---
const mapeamentoFalhas = {
    impressora: [
        'Erro no carro de impressão (Atolamento)', 
        'Cabeçote entupido', 
        'Placa lógica em curto'
    ],
    refrigerador: [
        'Falha no sensor NTC', 
        'Placa Inverter danificada', 
        'Vazamento de fluido refrigerante'
    ],
    notebook: [
        'Upgrade de RAM/SSD', 
        'Reballing BGA', 
        'Troca de display'
    ]
};

// --- SELETORES DOM ---
const osForm = document.getElementById('osForm');
const categoriaSelect = document.getElementById('categoria');
const falhaSelect = document.getElementById('falha');
const searchInput = document.getElementById('searchInput');
const colunasKanban = document.querySelectorAll('.kanban-column');

// --- INICIALIZAÇÃO ---
function init() {
    configurarEventosGerais();
    configurarDragAndDrop();
}

function configurarEventosGerais() {
    categoriaSelect.addEventListener('change', atualizarOpcoesFalha);
    osForm.addEventListener('submit', criarOrdemServico);
    searchInput.addEventListener('input', filtrarOS);
}

// --- REGRAS DE NEGÓCIO E DOM ---

// SRP: Apenas atualiza o select secundário baseado no primário
function atualizarOpcoesFalha(evento) {
    const categoria = evento.target.value;
    
    falhaSelect.innerHTML = '<option value="">Selecione o problema...</option>';
    
    if (categoria && mapeamentoFalhas[categoria]) {
        falhaSelect.disabled = false;
        mapeamentoFalhas[categoria].forEach(falha => {
            const option = document.createElement('option');
            option.value = falha;
            option.textContent = falha;
            falhaSelect.appendChild(option);
        });
    } else {
        falhaSelect.disabled = true;
    }
}

// SRP: Valida e cria o objeto da OS
function criarOrdemServico(evento) {
    evento.preventDefault();
    
    try {
        const cliente = document.getElementById('cliente').value.trim();
        const categoria = categoriaSelect.value;
        const falha = falhaSelect.value;

        if (!cliente || !categoria || !falha) throw new Error("Preencha todos os campos.");

        const novaOS = {
            id: `OS-${String(idCounter).padStart(4, '0')}`,
            cliente,
            categoria,
            falha,
            status: 'entrada'
        };

        ordensDeServico.push(novaOS);
        idCounter++;
        
        renderizarKanban();
        osForm.reset();
        falhaSelect.disabled = true;
        exibirToast('Ordem de Serviço criada com sucesso!', 'success');
        
    } catch (erro) {
        exibirToast(erro.message, 'error'); // Tratamento de anomalias exigido no projeto
    }
}

// SRP: Renderiza os cards nas colunas corretas
function renderizarKanban(dados = ordensDeServico) {
    // Limpa todas as colunas
    document.querySelectorAll('.kanban-cards').forEach(col => col.innerHTML = '');

    dados.forEach(os => {
        const colunaElemento = document.getElementById(`col-${os.status}`);
        if (!colunaElemento) return;

        const card = document.createElement('div');
        card.className = 'card';
        card.draggable = true;
        card.dataset.id = os.id;
        card.innerHTML = `
            <strong>${os.id}</strong>
            <p><strong>Cliente:</strong> ${os.cliente}</p>
            <p><strong>Falha:</strong> ${os.falha}</p>
        `;
        
        // Eventos de Drag (Arrastar)
        card.addEventListener('dragstart', (e) => {
            card.classList.add('dragging');
            e.dataTransfer.setData('text/plain', os.id);
        });

        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
        });

        colunaElemento.appendChild(card);
    });
}

// --- DRAG AND DROP API ---
function configurarDragAndDrop() {
    colunasKanban.forEach(coluna => {
        coluna.addEventListener('dragover', (e) => {
            e.preventDefault(); // Necessário para permitir o drop
        });

        coluna.addEventListener('drop', (e) => {
            e.preventDefault();
            const osId = e.dataTransfer.getData('text/plain');
            const novoStatus = coluna.dataset.status;
            
            atualizarStatusOS(osId, novoStatus);
        });
    });
}

// SRP: Atualiza o estado da aplicação
function atualizarStatusOS(id, novoStatus) {
    const osIndex = ordensDeServico.findIndex(os => os.id === id);
    if (osIndex > -1) {
        ordensDeServico[osIndex].status = novoStatus;
        renderizarKanban();
    }
}

// --- FILTRO E BUSCA ---
function filtrarOS(evento) {
    const termo = evento.target.value.toLowerCase();
    const filtrados = ordensDeServico.filter(os => 
        os.cliente.toLowerCase().includes(termo) || 
        os.id.toLowerCase().includes(termo)
    );
    renderizarKanban(filtrados);
}

// --- FEEDBACK VISUAL (Toasts) ---
function exibirToast(mensagem, tipo = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${tipo}`;
    toast.textContent = mensagem;

    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Inicia a aplicação
document.addEventListener('DOMContentLoaded', init);