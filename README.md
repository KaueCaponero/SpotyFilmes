# Documentação da API SpotyFilmes

A API **SpotyFilmes** é uma interface RESTful para gerenciar filmes e categorias de acordo com o gosto do usuário. Esta documentação fornece detalhes sobre os endpoints disponíveis, os formatos de entrada/saída e os códigos de retorno.

## Categorias

### Listar Todas as Categorias

- **Método:** `GET`
- **Endpoint:** `/categorias`
- **Descrição:** Retorna a lista de todas as categorias do sistema.

#### Exemplo de Resposta:
```json
[
    {
        "id": 1,
        "nome": "Ação",
        "url_imagem": "https://exemplo.com/imagem-acao.jpg",
        "descricao": "Filmes cheios de ação e adrenalina.",
        "classificacao": 4
    },
    {
        "id": 2,
        "nome": "Comédia",
        "url_imagem": "https://exemplo.com/imagem-comedia.jpg",
        "descricao": "Filmes engraçados para rir sem parar.",
        "classificacao": 2
    }
    // ... outras categorias
]
```

### Listar Categoria por ID

- **Método:** `GET`
- **Endpoint:** `/categorias/{id}`
- **Descrição:** Retorna uma categoria específica com base no seu ID.

#### Exemplo de Resposta:
```json
{
    "id": 1,
    "nome": "Ação",
    "url_imagem": "https://exemplo.com/imagem-acao.jpg",
    "descricao": "Filmes cheios de ação e adrenalina.",
    "classificacao": 4
}
```

### Cadastrar nova Categoria

- **Método:** `POST`
- **Endpoint:** `/categorias`
- **Descrição:** Cadastra uma nova categoria no sistema.

#### Formato de entrada (JSON):
```json
{
    "nome": "Drama",
    "url_imagem": "https://exemplo.com/imagem-drama.jpg",
    "descricao": "Filmes emocionantes que mexem com os sentimentos.",
    "classificacao": 1
}
```

### Editar Categoria por ID

- **Método:** `PUT`
- **Endpoint:** `/categorias/{id}`
- **Descrição:** Edita uma categoria existente com base no seu ID.

#### Formato de entrada (JSON):
```json
{
    "nome": "Suspense",
    "url_imagem": "https://exemplo.com/imagem-suspense.jpg",
    "descricao": "Filmes que mantêm você na ponta da cadeira.",
    "classificacao": 5
}
```

### Deletar Categoria por ID

- **Método:** `DELETE`
- **Endpoint:** `/categorias/{id}`
- **Descrição:** Deleta uma categoria do sistema com base no seu ID.

## Filmes

### Listar Todos os Filmes

- **Método:** `GET`
- **Endpoint:** `/filmes`
- **Descrição:** Retorna a lista de todos os filmes do sistema.

#### Exemplo de Resposta:
```json
[
    {
        "id": 1,
        "nome": "Vingadores: Ultimato",
        "url_imagem": "https://exemplo.com/imagem-vingadores.jpg",
        "descricao": "Os heróis mais poderosos da Terra enfrentam o vilão Thanos.",
        "classificacao": 5,
        "categoria": {
            "id": 1,
            "nome": "Ação",
            "url_imagem": "https://exemplo.com/imagem-acao.jpg",
            "descricao": "Filmes cheios de ação e adrenalina.",
            "classificacao": 4
        }
    },
    {
        "id": 2,
        "nome": "O Rei Leão",
        "url_imagem": "https://exemplo.com/imagem-reileao.jpg",
        "descricao": "A emocionante jornada de Simba para reivindicar seu lugar como rei.",
        "classificacao": 0,
        "categoria": {
            "id": 3,
            "nome": "Infantil",
            "url_imagem": "https://exemplo.com/imagem-infantil.jpg",
            "descricao": "Filmes para ver com os filhos",
            "classificacao": 2
        }
    }
    // ... outros filmes
]
```

### Listar Filmes por Categoria

- **Método:** `GET`
- **Endpoint:** `/filmes/categoria/{id}`
- **Descrição:** Retorna a lista de todos os filmes de uma categoria com base no ID da categoria.

#### Exemplo de Resposta:
```json
[
    {
        "id": 1,
        "nome": "Vingadores: Ultimato",
        "url_imagem": "https://exemplo.com/imagem-vingadores.jpg",
        "descricao": "Os heróis mais poderosos da Terra enfrentam o vilão Thanos.",
        "classificacao": 5,
        "categoria": {
            "id": 1,
            "nome": "Ação",
            "url_imagem": "https://exemplo.com/imagem-acao.jpg",
            "descricao": "Filmes cheios de ação e adrenalina.",
            "classificacao": 4
        }
    },
    {
        "id": 18,
        "nome": "Vingadores: Guerra Infinita",
        "url_imagem": "https://exemplo.com/imagem-guerrainfinita.jpg",
        "descricao": "Sequência da Marvel",
        "classificacao": 5,
        "categoria": {
            "id": 1,
            "nome": "Ação",
            "url_imagem": "https://exemplo.com/imagem-acao.jpg",
            "descricao": "Filmes cheios de ação e adrenalina.",
            "classificacao": 4
        }
    }
    // ... outros filmes
]
```

### Listar Filme por ID

- **Método:** `GET`
- **Endpoint:** `/filmes/{id}`
- **Descrição:** Retorna um filme específico com base no seu ID.

#### Exemplo de Resposta:
```json
{
    "id": 1,
    "nome": "Vingadores: Ultimato",
    "url_imagem": "https://exemplo.com/imagem-vingadores.jpg",
    "descricao": "Os heróis mais poderosos da Terra enfrentam o vilão Thanos.",
    "classificacao": 5,
    "categoria": {
            "id": 1,
            "nome": "Ação",
            "url_imagem": "https://exemplo.com/imagem-acao.jpg",
            "descricao": "Filmes cheios de ação e adrenalina.",
            "classificacao": 4
        }
}
```

### Cadastrar novo Filme

- **Método:** `POST`
- **Endpoint:** `/filmes`
- **Descrição:** Cadastra um novo filme no sistema.

#### Formato de entrada (JSON):
```json
{
    "nome": "Piratas do Caribe: A Maldição do Pérola Negra",
    "url_imagem": "https://exemplo.com/imagem-piratas.jpg",
    "descricao": "O capitão Jack Sparrow embarca em uma aventura pirata.",
    "classificacao": 4,
    "categoria": {
            "id": 1
        }
}
```

### Editar Filme por ID

- **Método:** `PUT`
- **Endpoint:** `/filmes/{id}`
- **Descrição:** Edita um filme existente com base no seu ID.

#### Formato de entrada (JSON):
```json
{
    "nome": "Interestelar",
    "url_imagem": "https://exemplo.com/imagem-interestelar.jpg",
    "descricao": "Uma equipe de astronautas explora buracos de minhoca no espaço.",
    "classificacao": 2,
    "categoria": {
            "id": 1
        }
}
```

### Deletar Filme por ID

- **Método:** `DELETE`
- **Endpoint:** `/filmes/{id}`
- **Descrição:** Deleta um filme do sistema com base no seu ID.

## Códigos de Retorno

- `200 OK`: A requisição foi bem-sucedida.
- `201 Created`: A entidade foi criada com sucesso.
- `204 No Content`: A requisição foi bem-sucedida, mas não há conteúdo para retornar.
- `400 Bad Request`: A requisição possui parâmetros inválidos ou incorretos.
- `404 Not Found`: O recurso solicitado não foi encontrado.
- `500 Internal Server Error`: Ocorreu um erro interno no servidor.

Esta documentação descreve os endpoints disponíveis na API spotyfilmes. Certifique-se de utilizar os formatos de entrada/saída corretos e interpretar os códigos de retorno para uma integração adequada com o sistema.