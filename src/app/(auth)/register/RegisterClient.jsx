"use client";
import Loader from "@/components/loader/Loader";
import { useRouter } from "next/navigation";
import styles from "../login/Auth.module.scss";
import React, { useState } from "react";
import Image from "next/image";
import Input from "@/components/input/Input";
import Divider from "@/components/divider/Divider";
import Button from "@/components/button/Button";
import Link from "next/link";
import LogoPath from "@/assets/colorful.svg";

export default function RegisterClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const registerUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <Link href={"/"}>
            <h1 className={styles.logo}>
              <Image priority src={LogoPath} alt="logo" />
            </h1>
          </Link>

          <form onSubmit={registerUser} className={styles.form}>
            {/* input */}
            <Input
              email
              icon="letter"
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
              icon="lock"
              id="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호"
              className={styles.control}
              value={password}
              onchange={(e) => setPassword(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호 확인"
              placeholder="비밀번호 확인"
              className={styles.control}
              value={cPassword}
              onchange={(e) => setCPassword(e.target.value)}
            />
            <div className={styles.buttonGroup}>
              <Button type="submit" width="100%">
                회원가입
              </Button>
              <Divider />
              <Link href={"/login"}>
                <Button width="100%" secondary>
                  로그인
                </Button>
              </Link>
              <Divider />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
