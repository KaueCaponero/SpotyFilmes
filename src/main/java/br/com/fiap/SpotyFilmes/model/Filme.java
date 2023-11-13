package br.com.fiap.SpotyFilmes.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "SPOTYFILMES_FILME", uniqueConstraints = {
        @UniqueConstraint(name = "UK_NM_FILME", columnNames = "NM_FILME")
})
public class Filme {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SPOTYFILMES_SQ_FILME")
    @SequenceGenerator(name = "SPOTYFILMES_SQ_FILME", sequenceName = "SPOTYFILMES_SQ_FILME", allocationSize = 1)
    @Column(name = "ID_FILME", nullable = false)    
    private Long id;

    @NotNull
    @NotBlank
    @Column(name = "NM_FILME", nullable = false)
    private String nome;

    @Column(name = "IMG_FILME")
    private String url_imagem;

    @Column(name = "DS_FILME")
    private String descricao;

    @Min(value = 0, message = "O valor mínimo da classificação é 0.")
    @Max(value = 5, message = "O valor máximo da classificação é 5.")
    @Column(name = "CLS_FILME")
    private Long classificacao;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "CAT_FILME")
    private Categoria categoria;

    public Filme withNome(String nome) {
        this.nome = nome;
        return this;
    }

    public Filme withUrlImagem(String url_imagem) {
        this.url_imagem = url_imagem;
        return this;
    }

    public Filme withDescricao(String descricao) {
        this.descricao = descricao;
        return this;
    }

    public Filme withClassificacao(Long classificacao) {
        this.classificacao = classificacao;
        return this;
    }

    public Filme withCategoria(Categoria categoria) {
        this.categoria = categoria;
        return this;
    }
}
