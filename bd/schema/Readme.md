# Observações Gerais

1. Todos os campos aqui apresentados devem existir na base utilizada como fonte de dados para a importação ao sistema da comunidade, estando posicionados respectivamente em uma view ou tabela que deve estar obrigatoriamente relacionada.
2. Caso um campo solicitado não exista no sistema de seleção utilizado pela comunidade, o mesmo deverá ser adicionado na view correspondente, ainda que retorne valor em branco ('null').
3. Alguns dados, por serem obrigatórios, necessitam do preenchimento correto com os dados do classificado, não podendo ficar em branco ('null'). Esses campos obrigatórios são:
   - Nome
   - Email
   - fk_AreaDeInteresse_AreaDeInteresse_PK
   - Disponibilidade
   - fk_linguegem_linguegem_PK

#Descrição dos campos

# Descrição dos Campos

## Usuario

| Campo                                 | Descrição                                       | Formato  | Tamanho           |
| ------------------------------------- | ----------------------------------------------- | -------- | ----------------- |
| Nome                                  | Nome do usuário                                 | VARCHAR  | 50                |
| SobreNome                             | Sobrenome do usuário                            | VARCHAR  | 50                |
| Email                                 | Email do usuário                                | VARCHAR  | 60                |
| fk_AreaDeInteresse_AreaDeInteresse_PK | Chave estrangeira para a tabela AreaDeInteresse | INT      | 255               |
| Disponibilidade                       | Data de disponibilidade do usuário              | DATETIME | N/A               |
| fk_Turno_Turno_PK                     | Chave estrangeira para a tabela Turno           | VARCHAR  | 255               |
| Whatsapp                              | Número de WhatsApp do usuário                   | VARCHAR  | 20                |
| fk_linguegem_linguegem_PK             | Chave estrangeira para a tabela Linguegem       | INT      | N/A               |
| ID_usuario                            | Identificador único do usuário                  | INT      | N/A (Primary Key) |

## Newsletter

| Campo         | Descrição                                  | Formato | Tamanho           |
| ------------- | ------------------------------------------ | ------- | ----------------- |
| Email         | Email cadastrado para receber a newsletter | VARCHAR | 60                |
| ID_newsletter | Identificador único da newsletter          | INT     | N/A (Primary Key) |

## EntreEmContato

| Campo               | Descrição                                          | Formato | Tamanho           |
| ------------------- | -------------------------------------------------- | ------- | ----------------- |
| Nome                | Nome da pessoa que entrou em contato               | VARCHAR | 50                |
| Email               | Email da pessoa que entrou em contato              | VARCHAR | 50                |
| Mensagem            | Mensagem enviada pela pessoa que entrou em contato | VARCHAR | 250               |
| ID_entre_em_contato | Identificador único do contato                     | INT     | N/A (Primary Key) |

## AreaDeInteresse

| Campo              | Descrição                                | Formato | Tamanho           |
| ------------------ | ---------------------------------------- | ------- | ----------------- |
| AreaDeInteresse_PK | Identificador único da área de interesse | INT     | 255 (Primary Key) |
| Backend            | Interesse em backend                     | BOOLEAN | 255               |
| Frontend           | Interesse em frontend                    | BOOLEAN | 255               |
| BancoDeDados       | Interesse em banco de dados              | BOOLEAN | 255               |
| UiUxDesinger       | Interesse em UI/UX Design                | BOOLEAN | 255               |

## Turno

| Campo    | Descrição                    | Formato | Tamanho           |
| -------- | ---------------------------- | ------- | ----------------- |
| Turno_PK | Identificador único do turno | INT     | 255 (Primary Key) |
| Matutino | Interesse no turno matutino  | BOOLEAN | 255               |
| Diurno   | Interesse no turno diurno    | BOOLEAN | 255               |
| Noturno  | Interesse no turno noturno   | BOOLEAN | 255               |

## Linguegem

| Campo        | Descrição                        | Formato | Tamanho           |
| ------------ | -------------------------------- | ------- | ----------------- |
| linguegem_PK | Identificador único da linguagem | INT     | N/A (Primary Key) |
| Python       | Interesse em Python              | BOOLEAN | 255               |
| JavaScript   | Interesse em JavaScript          | BOOLEAN | 255               |
| Java         | Interesse em Java                | BOOLEAN | 255               |
| Csharp       | Interesse em C#                  | BOOLEAN | 255               |

## Cadastrar_Usuario_Newsletter_EntreEmContato

| Campo                                 | Descrição                                      | Formato | Tamanho |
| ------------------------------------- | ---------------------------------------------- | ------- | ------- |
| fk_Usuario_ID_usuario                 | Chave estrangeira para a tabela Usuario        | INT     | N/A     |
| fk_Newsletter_ID_newsletter           | Chave estrangeira para a tabela Newsletter     | INT     | N/A     |
| fk_EntreEmContato_ID_entre_em_contato | Chave estrangeira para a tabela EntreEmContato | INT     | N/A     |
