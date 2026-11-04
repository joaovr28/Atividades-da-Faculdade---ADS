-- 4) Cadastro de 3 Professores com especialidades diferentes
INSERT INTO Professor (Nome, CPF, Email, Especialidade) VALUES
('Ana Silva', '111.111.111-11', 'ana@escola.com', 'Banco de Dados'),
('Carlos Sousa', '222.222.222-22', 'carlos@escola.com', 'Programação Web'),
('Mariana Lima', '333.333.333-33', 'mariana@escola.com', 'Engenharia de Software');

-- 5) Cadastro de 4 Cursos
INSERT INTO Curso (Nome_do_curso, Carga_horária, Mensalidade) VALUES
('Modelagem de Dados', 40, 150.00),
('Desenvolvimento Front-end', 80, 250.00),
('Desenvolvimento Back-end', 100, 300.00),
('Lógica de Programação', 60, 120.00);

-- Cadastro da Tabela Associativa (Atribuindo Professores aos Cursos)
INSERT INTO Professor_Curso (fk_idProfessor, fk_idCurso) VALUES
(1, 1), 
(2, 2), 
(3, 3), 
(2, 4);

-- Cadastro de Alunos (Necessário para poder fazer as matrículas)
INSERT INTO Aluno (Nome, CPF, Data_de_nascimento, Email, Telefone) VALUES
('João Victor', '444.444.444-44', '2005-05-28', 'joao@email.com', '81999999999'),
('Beatriz Gomes', '555.555.555-55', '2000-10-15', 'beatriz@email.com', '81988888888'),
('Lucas Mendes', '666.666.666-66', '1998-03-22', 'lucas@email.com', '81977777777'),
('Aluno Sem Matrícula', '000.000.000-00', '1999-01-01', 'fantasma@email.com', '81900000000');

-- 6) Cadastro de 8 Matrículas (4 ativas, 2 canceladas, 2 concluídas)
INSERT INTO Matrícula (fk_idAluno, fk_idCurso, Data_da_matrícula, Situação_da_matrícula) VALUES
(1, 1, '2026-09-01', 'Ativa'),
(1, 2, '2026-09-02', 'Ativa'),
(2, 3, '2026-09-05', 'Ativa'),
(3, 4, '2026-09-10', 'Ativa'),
(2, 1, '2026-08-01', 'Cancelada'),
(3, 2, '2026-08-15', 'Cancelada'),
(1, 4, '2026-01-15', 'Concluída'),
(2, 4, '2026-02-20', 'Concluída');