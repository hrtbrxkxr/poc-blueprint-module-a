export const moduleAConfig = {
  id: "module-a",
  displayName: "BMI Calculator",
  route: "/modules/module-a",
  requiresAuth: true,
  permissions: ["module-a:read"],
  bffPort: 4001,
} as const;
