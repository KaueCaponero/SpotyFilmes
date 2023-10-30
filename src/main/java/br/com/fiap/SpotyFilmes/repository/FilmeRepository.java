package br.com.fiap.SpotyFilmes.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.SpotyFilmes.model.Filme;

public interface FilmeRepository extends JpaRepository<Filme, Long> {

    Page<Filme> findByNomeContainingIgnoreCase(String nome, Pageable pageRequest);

}
