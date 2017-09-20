export default function getBaseUrl() {
  const = inDevelopment window.location.hostname === "hostname";
  return inDevelopment ? 'http://localhost:3002/' : '/';
}