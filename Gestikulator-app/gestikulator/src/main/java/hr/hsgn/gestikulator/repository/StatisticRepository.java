package hr.hsgn.gestikulator.repository;

import hr.hsgn.gestikulator.entity.Statistic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StatisticRepository extends JpaRepository<Statistic, Long> {
    @Query(value="SELECT is_solved FROM statistics WHERE sub_level_id = :subLevelId AND user_id = :userId ORDER BY timestamp ASC LIMIT 1", nativeQuery = true)
    Boolean getIsSolved(@Param("subLevelId") Long subLevelId, @Param("userId") Long userId);
}
