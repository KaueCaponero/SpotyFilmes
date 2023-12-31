package br.com.fiap.SpotyFilmes.model;

import jakarta.persistence.*;
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
@Table(name = "SPOTYFILMES_CATEGORIA", uniqueConstraints = {
        @UniqueConstraint(name = "UK_NM_CATEGORIA", columnNames = "NM_CATEGORIA")
})
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SPOTYFILMES_SQ_CATEGORIA")
    @SequenceGenerator(name = "SPOTYFILMES_SQ_CATEGORIA", sequenceName = "SPOTYFILMES_SQ_CATEGORIA", allocationSize = 1)
    @Column(name = "ID_CATEGORIA", nullable = false)    
    private Long id;

    @NotNull
    @NotBlank
    @Column(name = "NM_CATEGORIA", nullable = false)
    private String nome;

    @Column(name = "IMG_CATEGORIA")
    private String url_imagem;

    @Column(name = "DS_CATEGORIA")
    private String descricao;

    @Min(value = 0, message = "O valor mínimo da classificação é 0.")
    @Max(value = 5, message = "O valor máximo da classificação é 5.")
    @Column(name = "CLS_CATEGORIA")
    private Long classificacao;
}