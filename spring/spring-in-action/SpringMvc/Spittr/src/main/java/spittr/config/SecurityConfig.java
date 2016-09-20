package spittr.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.StandardPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    DataSource dataSource;
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .formLogin()
                .loginPage("/login")
            .and()
            .logout()
                .logoutSuccessUrl("/")
                .logoutUrl("/signout")
            .and()
            .rememberMe()
                .tokenValiditySeconds(2419200)
                .key("spittrKey")
            .and()
            .httpBasic()
                .realmName("Spittr")
            .and()
            .authorizeRequests()
                .antMatchers("/spitters/me").hasRole("SPITTER")
                .antMatchers(HttpMethod.POST, "/spittles").hasRole("SPITTER")
                .antMatchers("/admin")
                    .access("isAuthenticated() and principal.username=='erichen'")
                .anyRequest().permitAll()
            .and()
            .requiresChannel()
                .antMatchers("spitter/form").requiresSecure()
                .antMatchers("/").requiresInsecure();
    }
    
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth
            .jdbcAuthentication()
                .dataSource(dataSource)
                .usersByUsernameQuery(
                    "select username, password, true from Spitter where username=?")
                .authoritiesByUsernameQuery(
                    "select username, 'ROLE_USER' from Spitter where username=?")
                .passwordEncoder(new StandardPasswordEncoder("53cr3t"));
    }
}
