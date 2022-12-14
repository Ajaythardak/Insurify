package com.stackroute.authentication.service.config;

//import java.io.IOException;
//
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//
//import com.stackroute.authentication.service.service.UserDetailsServiceImp;
//import com.stackroute.authentication.service.service.UserOAuth2User;
//import com.stackroute.authentication.service.service.UserOAuth2UserService;
//import com.stackroute.authentication.service.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.userdetails.UserDetailsService;
//
//import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
//import org.springframework.web.cors.CorsConfiguration;
//
//
//
//@Configuration
//@EnableWebSecurity
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//
//
//    @Bean
//    public UserDetailsService userDetailsService() {
//        return new UserDetailsServiceImp();
//    }
//
//
//
//
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//                .antMatchers("/", "/login", "/oauth/**").permitAll()
//                .antMatchers("/new").authenticated()
//                .and()
//                .formLogin().permitAll()
//                .loginPage("/login")
//                .usernameParameter("email")
//                .passwordParameter("pass")
//                .defaultSuccessUrl("/list")
//                .and()
//                .oauth2Login()
//                .loginPage("/login")
//                .userInfoEndpoint()
//                .userService(oauthUserService)
//                .and()
//                .successHandler(new AuthenticationSuccessHandler() {
//
//                    @Override
//                    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
//                                                        Authentication authentication) throws IOException {
//                        System.out.println("AuthenticationSuccessHandler invoked");
//                        System.out.println("Authentication name: " + authentication.getName());
//                        UserOAuth2User oauthUser = (UserOAuth2User) authentication.getPrincipal();
//                        userService.processOAuthPostLogin(oauthUser.getEmail(),oauthUser.getName());
//
//                        response.sendRedirect("/list");
//                    }
//                })
//                //.defaultSuccessUrl("/list")
//                .and()
//                .logout().logoutSuccessUrl("/").permitAll()
//                .and()
//                .exceptionHandling().accessDeniedPage("/403")
//        ;
//    }
//
//    @Autowired
//    private UserOAuth2UserService oauthUserService;
//
//    @Autowired
//    private UserService userService;
//}
//
//
//
//
