package hr.hsgn.gestikulator.repository;
import hr.hsgn.gestikulator.entity.SubLevel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubLevelRepository extends JpaRepository<SubLevel, Long> {

    List<SubLevel> findByLevelId(Long id);
}
