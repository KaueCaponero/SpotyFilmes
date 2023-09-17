package br.com.fiap.SpotyFilmes.model;

import jakarta.persistence.*;
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

    @Column(name = "CLS_FILME")
    private Long classificacao;
    
    @ManyToOne
    @JoinColumn(name = "CAT_FILME")
    private Categoria categoria;
}
