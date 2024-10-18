from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Usuario, Newsletter, EntreEmContato
from .serializers import UsuarioSerializer, NewsletterSerializer, EntreEmContatoSerializer

import logging

logger = logging.getLogger(__name__)

# Função para adicionar cabeçalhos CORS
def add_custom_headers(response):
    response["Access-Control-Allow-Origin"] = "https://automatic-invention-rvpxqg4567gh4x5-8000.app.github.dev/"
    response["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    response["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    return response

# Usuario - CRUD Completo com CORS
@api_view(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def usuario_create(request, id=None):
    if request.method == 'GET':
        if id:
            usuario = Usuario.objects.get(id=id)
            serializer = UsuarioSerializer(usuario)
        else:
            usuarios = Usuario.objects.all()
            serializer = UsuarioSerializer(usuarios, many=True)
        response = Response(serializer.data, status=status.HTTP_200_OK)
        return add_custom_headers(response)

    elif request.method == 'POST':
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = Response({'message': 'Usuário salvo com sucesso!'}, status=status.HTTP_201_CREATED)
        else:
            response = Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return add_custom_headers(response)

    elif request.method in ['PUT', 'PATCH']:
        usuario = Usuario.objects.get(id=id)
        serializer = UsuarioSerializer(usuario, data=request.data, partial=(request.method == 'PATCH'))
        if serializer.is_valid():
            serializer.save()
            response = Response({'message': 'Usuário atualizado com sucesso!'}, status=status.HTTP_200_OK)
        else:
            response = Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return add_custom_headers(response)

    elif request.method == 'DELETE':
        usuario = Usuario.objects.get(id=id)
        usuario.delete()
        response = Response({'message': 'Usuário deletado com sucesso!'}, status=status.HTTP_204_NO_CONTENT)
        return add_custom_headers(response)

# Newsletter - CRUD Completo com CORS
@api_view(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def newsletter_create(request, id=None):
    if request.method == 'GET':
        if id:
            newsletter = Newsletter.objects.get(id=id)
            serializer = NewsletterSerializer(newsletter)
        else:
            newsletters = Newsletter.objects.all()
            serializer = NewsletterSerializer(newsletters, many=True)
        response = Response(serializer.data, status=status.HTTP_200_OK)
        return add_custom_headers(response)

    elif request.method == 'POST':
        serializer = NewsletterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = Response({'message': 'Newsletter salva com sucesso!'}, status=status.HTTP_201_CREATED)
        else:
            response = Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return add_custom_headers(response)

    elif request.method in ['PUT', 'PATCH']:
        newsletter = Newsletter.objects.get(id=id)
        serializer = NewsletterSerializer(newsletter, data=request.data, partial=(request.method == 'PATCH'))
        if serializer.is_valid():
            serializer.save()
            response = Response({'message': 'Newsletter atualizada com sucesso!'}, status=status.HTTP_200_OK)
        else:
            response = Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return add_custom_headers(response)

    elif request.method == 'DELETE':
        newsletter = Newsletter.objects.get(id=id)
        newsletter.delete()
        response = Response({'message': 'Newsletter deletada com sucesso!'}, status=status.HTTP_204_NO_CONTENT)
        return add_custom_headers(response)

# EntreEmContato - CRUD Completo com CORS
@api_view(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def entre_em_contato_create(request, id=None):
    if request.method == 'GET':
        if id:
            contato = EntreEmContato.objects.get(id=id)
            serializer = EntreEmContatoSerializer(contato)
        else:
            contatos = EntreEmContato.objects.all()
            serializer = EntreEmContatoSerializer(contatos, many=True)
        response = Response(serializer.data, status=status.HTTP_200_OK)
        return add_custom_headers(response)

    elif request.method == 'POST':
        serializer = EntreEmContatoSerializer(data=request.data)
        print("Dados recebidos no POST: ", request.data) 
        if serializer.is_valid():
            serializer.save()
            response = Response({'message': 'Contato salvo com sucesso!'}, status=status.HTTP_201_CREATED)
        else:
            logger.error(f"Erros de validação: {serializer.errors}")
            response = Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return add_custom_headers(response)

    elif request.method in ['PUT', 'PATCH']:
        contato = EntreEmContato.objects.get(id=id)
        serializer = EntreEmContatoSerializer(contato, data=request.data, partial=(request.method == 'PATCH'))
        if serializer.is_valid():
            serializer.save()
            response = Response({'message': 'Contato atualizado com sucesso!'}, status=status.HTTP_200_OK)
        else:
            print(serializer.errors)
            response = Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return add_custom_headers(response)

    elif request.method == 'DELETE':
        contato = EntreEmContato.objects.get(id=id)
        contato.delete()
        response = Response({'message': 'Contato deletado com sucesso!'}, status=status.HTTP_204_NO_CONTENT)
        return add_custom_headers(response)
