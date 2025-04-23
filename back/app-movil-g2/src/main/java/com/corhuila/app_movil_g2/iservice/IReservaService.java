package com.corhuila.app_movil_g2.iservice;

import com.corhuila.app_movil_g2.entity.Reserva;
import java.util.List;
import java.util.Optional;

public interface IReservaService {
    // Método para obtener todas las reservas
    List<Reserva> findAll();

    // Método para obtener una reserva por su ID
    Optional<Reserva> findById(Long id);

    // Método para guardar una nueva reserva
    Reserva save(Reserva reserva);

    // Método para eliminar una reserva por su ID
    void delete(Long id);
}
