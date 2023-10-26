package br.com.fiap.SpotyFilmes.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import br.com.fiap.SpotyFilmes.model.Categoria;
import br.com.fiap.SpotyFilmes.model.Filme;
import br.com.fiap.SpotyFilmes.repository.CategoriaRepository;
import br.com.fiap.SpotyFilmes.repository.FilmeRepository;

@Configuration
public class DatabaseSeeder implements CommandLineRunner {

    @Autowired
    CategoriaRepository categoriaRepository;

    @Autowired
    FilmeRepository filmeRepository;

    private Categoria acao = new Categoria(null, "Ação",
            "https://radiomixfm.com.br/wp-content/uploads/2019/10/jogos-e1572042158905.jpg", "Filmes de Ação", 5L);
    private Categoria comedia = new Categoria(null, "Comédia",
            "https://i.zst.com.br/images/os-6-melhores-filmes-de-comedia-para-assistir-em-2018-photo634743819-44-2-16.jpg",
            "Filmes de Comédia", 3L);
    private Categoria terror = new Categoria(null, "Terror",
            "https://s2.glbimg.com/6bdF931FVRp14rIwXthH_vsxE8k=/e.glbimg.com/og/ed/f/original/2019/09/05/it-chapter-two-box-office-predictions-.jpg",
            "Filmes de Terror", 2L);

    @Override
    public void run(String... args) throws Exception {

        categoriaRepository.saveAll(
                List.of(acao, comedia, terror));

        filmeRepository.saveAll(
                List.of(
                        new Filme()
                                .withNome("O Convento")
                                .withUrlImagem("https://capas-m.imagemfilmes.com.br/164062_000_m.jpg")
                                .withDescricao(
                                        "Após a misteriosa morte do Padre Miguel (Steffan Cennydd), sua irmã, Grace (Jena Malone), decide viajar até o convento onde ele vivia na Escócia para descobrir o que realmente aconteceu")
                                .withClassificacao(3L)
                                .withCategoria(terror),

                        new Filme()
                                .withNome("Os Mercenários 4")
                                .withUrlImagem("https://capas-m.imagemfilmes.com.br/164093_000_m.jpg")
                                .withDescricao(
                                        "Eles estão de volta e trouxeram reforço! O lendário grupo de mercenários liderado por Barney Ross (Sylvester Stallone) tem uma nova missão explosiva")
                                .withClassificacao(1L)
                                .withCategoria(acao),

                        new Filme()
                                .withNome("O Porteiro")
                                .withUrlImagem("https://capas-m.imagemfilmes.com.br/164076_000_m.jpg")
                                .withDescricao(
                                        "Confusão é o que não falta no prédio onde Waldisney (Alexandre Lino) trabalha como porteiro")
                                .withClassificacao(2L)
                                .withCategoria(comedia)));
    }
}
