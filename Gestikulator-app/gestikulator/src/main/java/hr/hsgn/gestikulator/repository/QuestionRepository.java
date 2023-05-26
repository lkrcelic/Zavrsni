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
    List<Question> getQuestionsBySubLevelId(Long id);
    List<Question> getQuestionsBySubLevelIdAndQuestionType(Long id, QuestionType questionType);
}
