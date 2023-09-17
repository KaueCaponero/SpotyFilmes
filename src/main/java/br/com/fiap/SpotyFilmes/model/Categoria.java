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
@Table(name = "TB_CATEGORIA", uniqueConstraints = {
    @UniqueConstraint(name = "UK_NM_CATEGORIA", columnNames = "NM_CATEGORIA")
})
public class Categoria {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CATEGORIA", nullable = false)
    private Long id;

    @NotBlank
    @Column(name = "NM_CATEGORIA", nullable = false)
    private String nome;

    @Column(name = "IMG_CATEGORIA")
    private String url_imagem;

    @Column(name = "DS_CATEGORIA")
    private String descricao;

    @Column(name = "CLS_CATEGORIA")
    private Long classificacao;
}