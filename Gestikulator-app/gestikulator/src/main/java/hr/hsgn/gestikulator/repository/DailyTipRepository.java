package hr.hsgn.gestikulator.repository;

import hr.hsgn.gestikulator.entity.DailyTip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DailyTipRepository extends JpaRepository<DailyTip, Long> {
}
