import { useAppContext } from './AppContext';

export function Content() {
  const { permissions } = useAppContext();
  if (permissions === undefined) {
    return null;
  }
  return permissions.includes('admin') ? (
    <p className="mt-4 text-l text-center">
      You have the <code>admin</code> permission.
    </p>
  ) : (
    <p className="mt-4 text-l text-center">Insufficient permissions.</p>
  );
}
