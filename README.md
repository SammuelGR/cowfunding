# DRE - Cowfunding

## Documento de Requisitos de Software (DRE) – Cowfunding (Crowdfunding com Criptomoedas)

### 1. Requisitos Funcionais de Cliente

| Identificação | Descrição                                                                                                                | Prioridade | Critérios de Aceitação                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ | ---------- | --------------------------------------------------------------------------------------------------- |
| RFC01         | Manter Usuário: CRUD completo para gerenciar usuários na plataforma.                                                     | Essencial  | Usuário cadastrado, editado, ou removido corretamente, com validação de email único e senha segura. |
| RFC02         | Manter Campanhas de Arrecadação: Permitir criação, edição e exclusão de campanhas.                                       | Essencial  | Campanha criada, atualizada ou removida conforme validações e regras de negócio.                    |
| RFC03         | Manter Doações: Registrar e acompanhar doações realizadas para campanhas.                                                | Essencial  | Doação registrada com validação na blockchain; doador e valor corretos.                             |
| RFC04         | Manter Carteiras: Gerenciar carteiras de criptomoedas dos usuários.                                                      | Essencial  | Carteira cadastrada, editada, ou removida com validação de endereço e criptomoeda suportada.        |
| RFC05         | Manter Moedas: Gerenciar criptomoedas aceitas na plataforma.                                                             | Essencial  | Moedas cadastradas e listadas corretamente; validações sobre compatibilidade de rede e formato.     |
| RFC06         | Manter Configurações de Conversão de Criptomoedas: Configurar taxas e valores de conversão para as criptomoedas aceitas. | Essencial  | Configuração salva e aplicada corretamente às transações.                                           |
| RFC07         | Manter Autenticação de Usuário via credenciais: Autenticação com login e senha.                                          | Essencial  | Usuário autenticado com sucesso ou mensagem de erro em caso de falha.                               |
| RFC08         | Manter Autenticação de Usuário via carteira: Autenticação com endereço de carteira de criptomoeda.                       | Essencial  | Usuário autenticado com endereço de carteira válido.                                                |
| RFC09         | Emitir relatório de doações: Geração de relatórios financeiros com detalhes das doações realizadas.                      | Importante | Relatório gerado com todas as doações registradas, incluindo validação de dados na blockchain.      |
| RFC10         | Emitir relatório de moedas: Geração de relatórios sobre as moedas usadas nas transações da plataforma.                   | Importante | Relatório completo das transações por tipo de moeda e suas configurações.                           |

### 2. CRUDS Detalhados

#### RFS01 - Cadastrar Usuário

**Atores:** Novos usuários
**Atributos:** Nome Completo, E-mail, Senha, País de Residência, Endereço de Carteira de Criptomoedas
**Regras de Validação:**

- Nome Completo: Menos de 150 caracteres
- E-mail: `<nome>@<domínio>.<extensão>`
- Senha: Mínimo 8 caracteres, uma letra maiúscula, um número
- País de Residência: País válido (seleção entre lista de países)
- Endereço de Carteira: Endereço válido de carteira de criptomoeda

**Prioridade:** Essencial

#### RFS02 - Gerenciar Carteira de Criptomoedas

**Atores:** Usuários
**Atributos:** Nome da Carteira, Tipo de Criptomoeda, Endereço da Carteira, Saldo, Data de Criação
**Regras de Validação:**

- Nome da Carteira: Máximo de 100 caracteres
- Tipo de Criptomoeda: Tipo suportado (ex.: Bitcoin, Ethereum)
- Endereço da Carteira: Endereço válido de criptomoeda
- Saldo: Valor numérico positivo
- Data de Criação: Data gerada automaticamente na criação da carteira

**Prioridade:** Essencial

#### RFS03 - Criar Campanha

**Atores:** Criadores de campanha
**Atributos:** Título, Descrição, Meta de Arrecadação, Prazo, Criptomoedas Aceitas
**Regras de Validação:**

- Título: Menos de 80 caracteres
- Meta de Arrecadação: Valor positivo, maior que o mínimo
- Prazo: Entre 1 e 365 dias
- Criptomoedas Aceitas: Seleção entre opções suportadas

**Prioridade:** Essencial

...

### 3. Requisitos Não Funcionais

| Identificação | Descrição                                                                                                           | Justificativa                                                                     | Observações Adicionais                                                                                                          |
| ------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| RNF01         | Segurança das Transações: Proteger o patrimônio dos usuários e a integridade do sistema.                            | Transações com criptomoedas exigem segurança rigorosa.                            | Considerar medidas como autenticação multifatorial, criptografia de ponta a ponta e auditorias de segurança regulares.          |
| RNF02         | Escalabilidade: Capacidade de expansão para suportar aumento de usuários e campanhas sem perda de desempenho.       | A plataforma deve suportar um aumento de uso sem comprometimento.                 | Arquitetura baseada em microserviços e escalabilidade horizontal podem ser úteis.                                               |
| RNF03         | Disponibilidade: Sistema disponível 24/7, dada a natureza global e a necessidade de doações a qualquer hora.        | Usuários globais esperam disponibilidade contínua.                                | Considerar redundância, balanceamento de carga e plano de recuperação de desastres para garantir alta disponibilidade.          |
| RNF04         | Desempenho de Consultas: Consultas a campanhas e relatórios devem ser rápidas.                                      | A experiência do usuário depende de consultas ágeis.                              | Usar banco de dados eficiente, otimizar consultas SQL e implementar cache para melhorar a performance.                          |
| RNF05         | Conformidade Legal: Plataforma em conformidade com regulamentos de criptomoedas e crowdfunding.                     | Necessidade de seguir regulamentações para segurança e legalidade.                | Verificar as leis locais e internacionais relacionadas a criptomoedas e crowdfunding, para garantir conformidade.               |
| RNF06         | Usabilidade: A interface do usuário deve ser intuitiva e acessível.                                                 | Usuários devem poder navegar facilmente na plataforma, sem dificuldades técnicas. | Investir em um design intuitivo e responsivo, com foco na experiência do usuário.                                               |
| RNF07         | Monitoramento e Auditoria: Funcionalidades para monitorar transações, identificar fraudes e garantir transparência. | Garantir que todas as transações sejam auditáveis e transparentes.                | Implementar sistemas de monitoramento e relatórios para rastrear atividades suspeitas e assegurar a integridade das transações. |

---

Este documento especifica os requisitos do sistema Cowfunding, abordando tanto os aspectos funcionais quanto os não funcionais. Para detalhes completos, consulte o documento original.
