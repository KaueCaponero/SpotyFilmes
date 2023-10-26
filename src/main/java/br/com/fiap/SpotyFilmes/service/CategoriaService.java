package br.com.fiap.SpotyFilmes.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.fiap.SpotyFilmes.model.Filme;
import br.com.fiap.SpotyFilmes.model.dto.TotalCategoria;
import br.com.fiap.SpotyFilmes.repository.FilmeRepository;

@Service
public class CategoriaService {

    @Autowired
    FilmeRepository filmeRepository;

    public List<TotalCategoria> getTotalPorCategoria() {
        var filmes = filmeRepository.findAll();
        var totais = filmes.stream()
            .collect(
                Collectors.groupingBy(
                    Filme::getCategoria,
                    Collectors.reducing(0L, e -> 1L, Long::sum)
                )
            )
            .entrySet()
            .stream()
            .map(e -> new TotalCategoria(e.getKey().getNome(), e.getValue()))
            .collect(Collectors.toList())
        ;
        return totais;
    }
    
}
