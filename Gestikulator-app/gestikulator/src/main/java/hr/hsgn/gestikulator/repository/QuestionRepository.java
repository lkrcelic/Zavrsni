package hr.hsgn.gestikulator.repository;

import hr.hsgn.gestikulator.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Query(value="SELECT * FROM questions WHERE sub_level_id = :subLevelId", nativeQuery = true)
    List<Question> getSubLevelQuestions(@Param("subLevelId") Long subLevelId);
}
