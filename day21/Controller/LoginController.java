package school.admission.Controller;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import school.admission.Entity.LoginEntity;
import school.admission.Service.LoginService;


@RestController
@CrossOrigin("*")
public class LoginController 
{
	@Autowired
	public LoginService l;
	
	@GetMapping("/getlogins")
	public List<LoginEntity> get()
	{
		return l.getlogin();
	}
	@GetMapping("/loginby")
	public Optional<LoginEntity> getloginn(@RequestParam int sid)
	{
		return l.getLoginDet(sid);
	}
	
	@GetMapping("/login")
	public String getlogin(@RequestParam String email,@RequestParam String pwd)
	{
		List<LoginEntity> le = new ArrayList<>();
		le = l.getLoginData(email, pwd);

		if(!le.isEmpty()) {
			return "Login Successful";
		}
		else {
			return "Login Failed";
		}

	}
	
	@DeleteMapping("/login")
	public String delete(@RequestParam int sid)
	{
		l.deleteLogin(sid);
		return "ID "+sid+" is deleted";
	}
}
