package br.com.fiap.SpotyFilmes.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "TB_FILME", uniqueConstraints = {
    @UniqueConstraint(name = "UK_NM_FILME", columnNames = "NM_FILME")
})
public class Filme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_FILME", nullable = false)
    private Long id;

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
    
    @ManyToOne
    @JoinColumn(name = "CAT_FILME")
    private Categoria categoria;
}
