interface loginType {
  username?: string ;
  password?: string;
}

interface registerType {
  full_name: string | undefined;
  username?: string;
  password?: string;
}

export type { loginType, registerType };
