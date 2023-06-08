type FormGroupProps = {
  id?: string;
} & React.ComponentPropsWithoutRef<"div">;

export const FormGroup: React.FC<FormGroupProps> = (props) => {
  return (
    <div className="flex flex-col gap-1" {...props}>
      {props.children}
    </div>
  );
};
