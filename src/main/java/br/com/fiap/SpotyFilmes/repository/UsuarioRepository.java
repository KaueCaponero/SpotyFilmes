package br.com.fiap.SpotyFilmes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.SpotyFilmes.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{
    
}
