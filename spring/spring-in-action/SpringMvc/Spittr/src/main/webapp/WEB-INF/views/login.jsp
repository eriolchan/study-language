<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
  <head><title>Login Page</title></head>
  <body onload='document.f.username.focus();'>
    <h3>Login with Username and Password</h3>
    <form name='f' action='/spitter/login' method='POST'>
      <table>
        <tr><td>User:</td>
          <td><input type='text' name='username' value=''></td></tr>
        <tr><td>Password:</td>
          <td><input type='password' name='password' /></td></tr>
        <tr><td colspan='2'>
        <input id="remember_me" name="remember-me" type="checkbox"/>
        <label for="remember_me" class="inline">Remember me</label></td></tr>
        <tr><td colspan='2'>
          <input name="submit" type="submit" value="Login" /></td></tr>
        <input name="_csrf" type="hidden" value="6829b1ae-0a14-4920-aac4-5abbd7eeb9ee" />
      </table>
    </form>
  </body>
</html>
