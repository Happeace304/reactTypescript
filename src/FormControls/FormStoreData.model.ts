import FormDataModel from "./FormData.model";

export default interface FormDataStoreModel {
  state: 'idle' | 'loading',
  data: FormDataModel
  list: FormDataModel[]
}
