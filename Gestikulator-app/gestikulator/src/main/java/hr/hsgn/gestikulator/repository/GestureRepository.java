package hr.hsgn.gestikulator.repository;

import hr.hsgn.gestikulator.entity.Gesture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GestureRepository extends JpaRepository<Gesture, Long> {
    @Query(value="SELECT text FROM gestures ORDER BY text", nativeQuery = true)
    List<String> getNames();

    @Query(value="SELECT * FROM gestures WHERE text = :text", nativeQuery = true)
    Gesture findByText(@Param("text") String text);
}
