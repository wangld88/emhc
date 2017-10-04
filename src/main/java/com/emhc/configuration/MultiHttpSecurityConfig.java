package com.emhc.configuration;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class MultiHttpSecurityConfig {

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private DataSource dataSource;
	
	@Value("${spring.queries.users-query}")
	private String usersQuery;

	@Value("${spring.queries.roles-query}")
	private String rolesQuery;

	
	@Configuration
	public static class SecurityConfiguration extends WebSecurityConfigurerAdapter {
		
		@Override
		protected void configure(HttpSecurity http) throws Exception {
			
			http.
				authorizeRequests()
	            .antMatchers("/*", "/student/login/**").permitAll()
	            .antMatchers("/student/registration").permitAll()
	            .antMatchers("/student/home").permitAll()
	            .antMatchers("/student/").permitAll()
				.antMatchers("/student/*").hasAuthority("ADMIN")
	            .anyRequest().authenticated()
	            .and().csrf().disable()
	        .formLogin()
	            .loginPage("/student/login").failureUrl("/student/login?error=true")
	            .defaultSuccessUrl("/student/home")
				.usernameParameter("email")
				.passwordParameter("password")
	            .permitAll()
	            .and()
	        .logout()
	            .permitAll();
		}
	}

	@Configuration
	@Order(1)
	public static class AdminSecurityConfiguration extends WebSecurityConfigurerAdapter {
		@Override
		protected void configure(HttpSecurity http) throws Exception {
			
			http
				.antMatcher("/admin/**")
				.authorizeRequests()
	                .anyRequest().authenticated()
	                .and()
	        .formLogin()
	            .loginPage("/admin/login")
	            .defaultSuccessUrl("/admin/home")
	            .permitAll()
	            .and()
	        .logout()
	            .permitAll();
		}
	}

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth)
			throws Exception {
    	System.out.println("%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
		System.out.println("--------------------------------run into configureGlobal-----------------------------");
		try
		{auth.
			jdbcAuthentication()
				.usersByUsernameQuery(usersQuery)
				.authoritiesByUsernameQuery(rolesQuery)
				.dataSource(dataSource)
				.passwordEncoder(bCryptPasswordEncoder);
//				.withDefaultSchema()
//				.withUser("jerrywang@hotmail.com").roles("ADMIN");
				
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
}