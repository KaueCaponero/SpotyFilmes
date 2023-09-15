package br.com.fiap.SpotyFilmes.model;

import jakarta.persistence.*;

@Entity
@Table(name = "TB_CATEGORIA", uniqueConstraints = {
    @UniqueConstraint(name = "UK_NM_CATEGORIA", columnNames = "NM_CATEGORIA")
})
public class Categoria {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CATEGORIA", nullable = false)
    private Long id;

    @Column(name = "NM_CATEGORIA", nullable = false)
    private String nome;

    @Column(name = "IMG_CATEGORIA")
    private String url_imagem;

    @Column(name = "DS_CATEGORIA")
    private String descricao;

    @Column(name = "CLS_CATEGORIA")
    private Long classificacao;

    public Categoria() {
    }

    public Categoria(Long id, String nome, String url_imagem, String descricao, Long classificacao) {
        this.id = id;
        this.nome = nome;
        this.url_imagem = url_imagem;
        this.descricao = descricao;
        this.classificacao = classificacao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public Long getClassificacao() {
        return classificacao;
    }

    public void setClassificacao(Long classificacao) {
        this.classificacao = classificacao;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((id == null) ? 0 : id.hashCode());
        result = prime * result + ((nome == null) ? 0 : nome.hashCode());
        result = prime * result + ((url_imagem == null) ? 0 : url_imagem.hashCode());
        result = prime * result + ((descricao == null) ? 0 : descricao.hashCode());
        result = prime * result + ((classificacao == null) ? 0 : classificacao.hashCode());
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
        if (id == null) {
            if (other.id != null)
                return false;
        } else if (!id.equals(other.id))
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
        if (classificacao == null) {
            if (other.classificacao != null)
                return false;
        } else if (!classificacao.equals(other.classificacao))
            return false;
        return true;
    }

    @Override
    public String toString() {
        return "Categoria [id=" + id + ", nome=" + nome + ", url_imagem=" + url_imagem + ", descricao=" + descricao
                + ", classificacao=" + classificacao + "]";
    }
}