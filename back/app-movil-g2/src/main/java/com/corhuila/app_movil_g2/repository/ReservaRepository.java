package com.corhuila.app_movil_g2.repository;

import com.corhuila.app_movil_g2.entity.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    // Aquí puedes agregar métodos personalizados si es necesario
}
