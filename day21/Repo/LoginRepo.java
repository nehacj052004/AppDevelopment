package school.admission.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import school.admission.Entity.LoginEntity;

public interface LoginRepo extends JpaRepository<LoginEntity, Integer> {

	List<LoginEntity> findByEmailAndPwd(String email, String pwd);
}
