"use client";

import React, { useState } from "react";
import Logo from "../components/logo/page";
import "./register.css";
import Link from "next/link";

import axios from "axios";

const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassowrd] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleCadaster = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let response = await axios.post("http://localhost:3001/create-user", {
        name,
        email,
        password,
        confirmPassword,
      });

      if (response.status !== 200) {
        alert("Cadastro inválido");
      }

      alert("Usuário cadastrado com sucesso");
      setName("");
      setEmail("");
      setPassowrd("");
      setConfirmPassword("");

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register-page-wrapper">
      <Logo />
      <div className="register-form-wrapper">
        <form onSubmit={(e) => handleCadaster(e)} className="register-form">
          <h2>Cadastre-se</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome completo"
            className="register-form-input"
            type="text"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="register-form-input"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassowrd(e.target.value)}
            placeholder="Senha"
            className="register-form-input"
            type="password"
          />
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmar senha"
            className="register-form-input"
            type="password"
          />
          <input
            className="register-form-button register-form-input"
            type="submit"
            value="Cadastrar"
          />
        </form>
        <span>
          Já tem cadastro? <Link href="/login">Conecte-se</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
