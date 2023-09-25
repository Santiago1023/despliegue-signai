import { IconAvatarUser } from "@/icons/Icons";
import styles from "./form-add-user.module.css";
import useForm from "@/hooks/useForm";
import { FormEvent } from "react";
import { validateFieldsAddForm } from "@/functions/validations";
import { NewUser } from "./form-add-user.types";

const userDataForm: NewUser = {
  name: "",
  lastName: "",
  username: "",
  email: "",
  document: "",
  position: "",
  location: "",
  university: "",
};

const FormAddUser = () => {
  const { inputs, handleChange } = useForm<NewUser>(userDataForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const responseValidation = validateFieldsAddForm(inputs);

    if (responseValidation.isValidate) {
      alert("¡El usuario fue creado con exito!");
    } else {
      alert(responseValidation.message);
    }
    return;
  };

  return (
    <form
      method="POST"
      className={styles.Form}
      onSubmit={(e) => {
        handleSubmit(e);
      }}>
      <div className={styles.AvatarContainer}>
        <IconAvatarUser width="100px" height="100px" />
      </div>
      <h3 className={styles.FormTitle}>Información Personal</h3>
      <section className={styles.WrapperInputs}>
        <div className={`${styles.Side}`}>
          <label htmlFor="name">
            Nombres
            <input
              onChange={handleChange}
              className={styles.Input}
              type="text"
              name="name"
              id="name"
            />
          </label>
          <label htmlFor="username">
            Usuario
            <input
              onChange={handleChange}
              className={styles.Input}
              type="text"
              name="username"
              id="username"
            />
          </label>
          <label htmlFor="document">
            N° Documento
            <input
              onChange={handleChange}
              className={styles.Input}
              type="text"
              name="document"
              id="document"
            />
          </label>
          <label htmlFor="location">
            Localidad
            <input
              onChange={handleChange}
              className={styles.Input}
              type="text"
              name="location"
              id="location"
            />
          </label>
        </div>
        <div className={`${styles.Side}`}>
          <label htmlFor="lastName">
            Apellidos
            <input
              onChange={handleChange}
              className={styles.Input}
              type="text"
              name="lastName"
              id="lastName"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              onChange={handleChange}
              className={styles.Input}
              type="email"
              name="email"
              id="email"
            />
          </label>
          <label htmlFor="position">
            Cargo
            <select
              className={`${styles.Input} py-[0.2rem]`}
              onChange={handleChange}
              name="position"
              id="position">
              <option value="administrator" selected>
                Administrador
              </option>
              <option value="professional">Profesional</option>
              <option value="assistant">Auxiliar</option>
            </select>
          </label>
          <label htmlFor="university">
            Universidad
            <input
              onChange={handleChange}
              className={styles.Input}
              type="text"
              name="university"
              id="university"
            />
          </label>
        </div>
      </section>
      <button className={styles.BtnForm}>Crear Usuario</button>
    </form>
  );
};

export default FormAddUser;
