package hr.hsgn.gestikulator.repository;

import hr.hsgn.gestikulator.entity.Question;
import hr.hsgn.gestikulator.entity.QuestionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Query(nativeQuery = true,
        value = "SELECT * FROM question WHERE sub_level_id = :id AND question_type = :questionType ORDER BY RANDOM() LIMIT :limit")
    List<Question> getNRandomQuestionsBySubLevelIdAndQuestionType(
        @Param("id") Long id,
        @Param("questionType") String questionType,
        @Param("limit") int limit);


}
