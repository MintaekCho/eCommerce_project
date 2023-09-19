"use client";
import React, { useState } from "react";
import LogoPath from "@/assets/colorful.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Auth.module.scss";
import Loader from "@/components/loader/Loader";
import Input from "@/components/input/Input";

export default function LoginClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAutoLogin, setIsAutoLogin] = useState(false); // 자동로그인 상태

  const router = useRouter();
  const redirectUser = () => {
    router.push("/");
  };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const signInWithGoogle = () => {
    // firebase 구글로그인 로직
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image priority src={LogoPath} alt="logo" />
          </h1>

          <form onSubmit={loginUser} className={styles.form}>
            {/* input */}
            <Input
              email
              icon='letter'
              id="email"
              name="email"
              label="이메일"
              placeholder="아이디(이메일)"
              className={styles.control}
              value={email}
              onchange={(e) => setEmail(e.target.value)}
            />
            <Input
              password
              icon='lock'
              id="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호"
              className={styles.control}
              value={password}
              onchange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.group}>
              자동로그인, 비밀번호 수정
            </div>
            <div className={styles.buttonGroup}>
              Button
              <div>Button</div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
