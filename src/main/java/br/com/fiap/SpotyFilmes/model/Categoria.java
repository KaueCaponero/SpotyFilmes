package br.com.fiap.SpotyFilmes.model;

public class Categoria {
    private int id;
    private String nome;
    private String url_imagem;
    private String descricao;
    private int classificacao;
    
    public Categoria() {
    }

    public Categoria(int id, String nome, String url_imagem, String descricao, int classificacao) {
        this.id = id;
        this.nome = nome;
        this.url_imagem = url_imagem;
        this.descricao = descricao;
        this.classificacao = classificacao;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getUrl_imagem() {
        return url_imagem;
    }

    public void setUrl_imagem(String url_imagem) {
        this.url_imagem = url_imagem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public int getClassificacao() {
        return classificacao;
    }

    public void setClassificacao(int classificacao) {
        this.classificacao = classificacao;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + id;
        result = prime * result + ((nome == null) ? 0 : nome.hashCode());
        result = prime * result + ((url_imagem == null) ? 0 : url_imagem.hashCode());
        result = prime * result + ((descricao == null) ? 0 : descricao.hashCode());
        result = prime * result + classificacao;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Categoria other = (Categoria) obj;
        if (id != other.id)
            return false;
        if (nome == null) {
            if (other.nome != null)
                return false;
        } else if (!nome.equals(other.nome))
            return false;
        if (url_imagem == null) {
            if (other.url_imagem != null)
                return false;
        } else if (!url_imagem.equals(other.url_imagem))
            return false;
        if (descricao == null) {
            if (other.descricao != null)
                return false;
        } else if (!descricao.equals(other.descricao))
            return false;
        if (classificacao != other.classificacao)
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Categoria [id=" + id + ", nome=" + nome + ", url_imagem=" + url_imagem + ", descricao=" + descricao
                + ", classificacao=" + classificacao + "]";
    }

}
