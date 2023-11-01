"use client";

import React, { useState } from "react";
import axios from "axios";

import Logo from "../components/logo/page";
import Link from "next/link";

import "./login.css";

const page: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      // TODO: Levar para a página home quando implementada
      alert("Login efetuado com sucesso");
      setEmail("");
      setPassword("");
    } catch (err) {
      alert("Login inválido");
    }
  };

  return (
    <div className="login-page-wrapper">
      <Logo />
      <div className="login-form-wrapper">
        <form onSubmit={(e) => handleSubmit(e)} className="login-form">
          <h2>Login</h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="login-form-input"
            type="email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="login-form-input"
            type="password"
          />
          <input
            className="login-form-button login-form-input"
            type="submit"
            value="Entrar"
          />
        </form>
        <span>
          Não tem cadastro? <Link href="/register">Cadastre-se</Link>
        </span>
      </div>
    </div>
  );
};

export default page;
