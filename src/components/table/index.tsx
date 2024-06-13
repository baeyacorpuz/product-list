import { cn } from "../../lib/cn";

const Table = ({
  children
}: any) => {
  return (
    <div className={cn('table-responsive bg-white flex')}>
      <table className="w-full  border border-neutral rounded-lg">
        {children}
      </table>
    </div>
  );
}
 
export default Table;