# Projeto Django para Formulário de Registro

Este projeto é uma API desenvolvida em Django para gerenciar o registro de usuários. A API é projetada para ser consumida por um frontend, como um aplicativo Next.js. A API suporta operações básicas de criação de registros.

## Requisitos

- Python 3.x
- Django 3.x ou superior
- Django Rest Framework

## Configuração do Projeto

### 1. Clone o Repositório

```bash
git clone <URL do seu repositório>
cd <nome do repositório>

2. Crie um Ambiente Virtual
bash
python -m venv .venv
source venv/bin/activate  # No Windows, use `venv\Scripts\activate`

3. Instale as Dependências
bash
pip install -r requirements.txt
4. Configure o Banco de Dados
Edite o arquivo settings.py e configure a seção DATABASES conforme necessário. O projeto padrão utiliza SQLite.

5. Realize as Migrações
bash
python manage.py makemigrations
python manage.py migrate
6. Execute o Servidor de Desenvolvimento
bash
python manage.py runserver
Endpoints da API
Registrar Usuário
URL: /register/register/

Método: POST

Descrição: Cria um novo registro de usuário.

Exemplo de Requisição:

json
{
    "name": "John",
    "lastname": "Doe",
    "country_code": "+55",
    "whatsapp": "32 98487-8082",
    "email": "john.doe@example.com",
    "area_interest": "backend",
    "language": "python",
    "availability": "2024-06-30",
    "shift": "morning"
}
Exemplo de Resposta de Sucesso:

json
{
    "id": 1,
    "name": "John",
    "lastname": "Doe",
    "country_code": "+55",
    "whatsapp": "32 98487-8082",
    "email": "john.doe@example.com",
    "area_interest": "backend",
    "language": "python",
    "availability": "2024-06-30",
    "shift": "morning"
}
Validação de Campos
whatsapp deve estar no formato XX XXXXX-XXXX onde XX é o código de área e XXXXX-XXXX é o número.
email deve ser um email válido.
name e lastname devem conter apenas letras.
country_code deve ser um código de país válido no formato +XX.

python
MIDDLEWARE = [
    # outras middlewares
    'django.middleware.csrf.CsrfViewMiddleware',
]
2. Validação de Entrada
Utilize validadores de Django para garantir que os dados de entrada estão no formato correto.

3. Limitar a Exposição da API
Utilize permissões e autenticação adequadas para limitar o acesso à API apenas a usuários autorizados. Adicione a configuração no settings.py:

python
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ],
}
Para mais informações sobre autenticação e permissões no Django Rest Framework, consulte a documentação oficial.

Contribuição
Fork este repositório.
Crie uma nova branch (git checkout -b feature/nova-feature).
Faça o commit das suas alterações (git commit -am 'Adiciona nova feature').
Faça o push para a branch (git push origin feature/nova-feature).
Crie um novo Pull Request.
Licença
Este projeto está licenciado sob os termos da licença MIT. Veja o arquivo LICENSE para mais detalhes.


### Explicação

- **Instalação e Configuração:** Instruções sobre como configurar e rodar o projeto localmente.
- **Endpoints da API:** Descrição do endpoint para registrar um usuário, incluindo exemplos de requisição e resposta.
- **Validação de Campos:** Informações sobre as validações implementadas para os campos do formulário.
- **Segurança da API:** Recomendações sobre como adicionar medidas de segurança à API, incluindo proteção CSRF e autenticação.
- **Contribuição e Licença:** Diretrizes sobre como contribuir para o projeto e informações sobre a licença do projeto.

Essa documentação deve fornecer uma base sólida para qualquer pessoa que queira usar ou contribuir com seu projeto.

