package school.admission.Entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user_data")
public class LoginEntity 
{  
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int sid;
	private String email;	
	private String pwd;

	public int getId() {
		return sid;
	}

	public void setId(int sid) {
		this.sid = sid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public LoginEntity() {
		super();
	}

	public LoginEntity(int sid, String email, String pwd) {
		super();
		this.sid = sid;
		this.email = email;
		this.pwd = pwd;
	}

	@Override
	public String toString() {
		return "LoginEntity [sid=" + sid + ", email=" + email + ", pwd=" + pwd + "]";
	}
	
	
		
	
}
