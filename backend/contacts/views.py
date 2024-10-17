from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Usuario, Newsletter, EntreEmContato
from .serializers import UsuarioSerializer, NewsletterSerializer, EntreEmContatoSerializer

# Usuario - GET (Listar) e POST (Criar)
@api_view(['GET', 'POST'])
def usuario_create(request):
    if request.method == 'GET':
        usuarios = Usuario.objects.all()
        serializer = UsuarioSerializer(usuarios, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializer = UsuarioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Usuário salvo com sucesso!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Newsletter - GET (Listar) e POST (Criar)
@api_view(['GET', 'POST'])
def newsletter_create(request):
    if request.method == 'GET':
        newsletters = Newsletter.objects.all()
        serializer = NewsletterSerializer(newsletters, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializer = NewsletterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Newsletter salva com sucesso!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# EntreEmContato - GET (Listar) e POST (Criar)
@api_view(['GET', 'POST'])
def entre_em_contato_create(request):
    if request.method == 'GET':
        contatos = EntreEmContato.objects.all()
        serializer = EntreEmContatoSerializer(contatos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializer = EntreEmContatoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Contato salvo com sucesso!'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)