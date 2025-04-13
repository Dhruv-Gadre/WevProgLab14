import React from 'react';
import './NovellLogin.css';

function NovellServicesLogin() {
  return (
    <div className="login-container">
      <h1>Novell Services Login</h1>
      
      <div className="form-row">
        <label>Username:</label>
        <input type="text" />
      </div>
      
      <div className="form-row">
        <label>Password:</label>
        <input type="password" />
      </div>
      
      <div className="form-row">
        <label>City of Employment:</label>
        <input type="text" />
      </div>
      
      <div className="form-row">
        <label>Web server:</label>
        <select>
          <option>-- Choose a server --</option>
          <option>Server 1</option>
          <option>Server 2</option>
          <option>Server 3</option>
        </select>
      </div>
      
      <div className="form-row">
        <label>Please specify your role:</label>
        <div className="radio-group">
          <div className="radio-option">
            <input type="radio" id="admin" name="role" defaultChecked />
            <label htmlFor="admin">Admin</label>
          </div>
          <div className="radio-option">
            <input type="radio" id="engineer" name="role" />
            <label htmlFor="engineer">Engineer</label>
          </div>
          <div className="radio-option">
            <input type="radio" id="manager" name="role" />
            <label htmlFor="manager">Manager</label>
          </div>
          <div className="radio-option">
            <input type="radio" id="guest" name="role" />
            <label htmlFor="guest">Guest</label>
          </div>
        </div>
      </div>
      
      <div className="form-row">
        <label>Single Sign-on to the following:</label>
        <div className="checkbox-group">
          <div className="checkbox-option">
            <input type="checkbox" id="mail" name="mail" />
            <label htmlFor="mail">Mail</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" id="payroll" name="payroll" />
            <label htmlFor="payroll">Payroll</label>
          </div>
          <div className="checkbox-option">
            <input type="checkbox" id="selfService" name="selfService" />
            <label htmlFor="selfService">Self-service</label>
          </div>
        </div>
      </div>
      
      <div className="button-row">
        <button type="button">Login</button>
        <button type="button">Reset</button>
      </div>
    </div>
  );
}

export default NovellServicesLogin;