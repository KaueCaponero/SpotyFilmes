package br.com.fiap.SpotyFilmes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.fiap.SpotyFilmes.model.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
    
}
