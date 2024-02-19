package br.com.fiap.SpotyFilmes.model.dto;

public record Token(
    String token,
    String type,
    String prefix
) {}