# Observações Gerais

1. Todos os campos aqui apresentados devem existir na base utilizada como fonte de dados para a importação ao sistema da comunidade, estando posicionados respectivamente em uma view ou tabela que deve estar obrigatoriamente relacionada.
2. Caso um campo solicitado não exista no sistema de seleção utilizado pela comunidade, o mesmo deverá ser adicionado na view correspondente, ainda que retorne valor em branco ('null').
3. Alguns dados, por serem obrigatórios, necessitam do preenchimento correto com os dados do classificado, não podendo ficar em branco ('null'). Esses campos obrigatórios são:
   - Nome
   - Email
   - fk_AreaDeInteresse_AreaDeInteresse_PK
   - Disponibilidade
   - fk_linguagem_linguagem_PK

#Descrição dos campos

# Descrição dos Campos

## Usuario

| Campo                                 | Descrição                                       | Formato  | Tamanho           |
| ------------------------------------- | ----------------------------------------------- | -------- | ----------------- |
| Nome                                  | Nome do usuário                                 | VARCHAR  | 50                |
| SobreNome                             | Sobrenome do usuário                            | VARCHAR  | 50                |
| Email                                 | Email do usuário                                | VARCHAR  | 60                |
| fk_AreaDeInteresse_AreaDeInteresse_PK | Chave estrangeira para a tabela AreaDeInteresse | INT      | 100               |
| Disponibilidade                       | Data de disponibilidade do usuário              | DATETIME | N/A               |
| fk_Turno_Turno_PK                     | Chave estrangeira para a tabela Turno           | INT      | 100               |
| Whatsapp                              | Número de WhatsApp do usuário                   | VARCHAR  | 20                |
| fk_linguagem_linguagem_PK             | Chave estrangeira para a tabela Linguagem       | INT      | 100               |
| ID_usuario                            | Identificador único do usuário                  | INT      | 100 (Primary Key) |

## Newsletter

| Campo         | Descrição                                  | Formato | Tamanho           |
| ------------- | ------------------------------------------ | ------- | ----------------- |
| Email         | Email cadastrado para receber a newsletter | VARCHAR | 60                |
| ID_newsletter | Identificador único da newsletter          | INT     | 100 (Primary Key) |

## EntreEmContato

| Campo               | Descrição                                          | Formato | Tamanho           |
| ------------------- | -------------------------------------------------- | ------- | ----------------- |
| Nome                | Nome da pessoa que entrou em contato               | VARCHAR | 50                |
| Email               | Email da pessoa que entrou em contato              | VARCHAR | 50                |
| Mensagem            | Mensagem enviada pela pessoa que entrou em contato | VARCHAR | 250               |
| ID_entre_em_contato | Identificador único do contato                     | INT     | 100 (Primary Key) |

## AreaDeInteresse

| Campo              | Descrição                                | Formato | Tamanho           |
| ------------------ | ---------------------------------------- | ------- | ----------------- |
| AreaDeInteresse_PK | Identificador único da área de interesse | INT     | 100 (Primary Key) |
| Backend            | Interesse em backend                     | BOOLEAN | N/A               |
| Frontend           | Interesse em frontend                    | BOOLEAN | N/A               |
| BancoDeDados       | Interesse em banco de dados              | BOOLEAN | N/A               |
| UiUxDesinger       | Interesse em UI/UX Design                | BOOLEAN | N/A               |

## Turno

| Campo    | Descrição                    | Formato | Tamanho           |
| -------- | ---------------------------- | ------- | ----------------- |
| Turno_PK | Identificador único do turno | INT     | 100 (Primary Key) |
| Matutino | Interesse no turno matutino  | BOOLEAN | N/A               |
| Diurno   | Interesse no turno diurno    | BOOLEAN | N/A               |
| Noturno  | Interesse no turno noturno   | BOOLEAN | N/A               |

## Linguagem

| Campo        | Descrição                        | Formato | Tamanho           |
| ------------ | -------------------------------- | ------- | ----------------- |
| linguagem_PK | Identificador único da linguagem | INT     | 100 (Primary Key) |
| Python       | Interesse em Python              | BOOLEAN | N/A               |
| JavaScript   | Interesse em JavaScript          | BOOLEAN | N/A               |
| Java         | Interesse em Java                | BOOLEAN | N/A               |
| Csharp       | Interesse em C#                  | BOOLEAN | N/A               |

## Cadastrar_Usuario_Newsletter_EntreEmContato

| Campo                                 | Descrição                                      | Formato | Tamanho |
| ------------------------------------- | ---------------------------------------------- | ------- | ------- |
| fk_Usuario_ID_usuario                 | Chave estrangeira para a tabela Usuario        | INT     | 100     |
| fk_Newsletter_ID_newsletter           | Chave estrangeira para a tabela Newsletter     | INT     | 100     |
| fk_EntreEmContato_ID_entre_em_contato | Chave estrangeira para a tabela EntreEmContato | INT     | 100     |
