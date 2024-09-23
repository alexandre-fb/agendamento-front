<template>
  <div
    class="w-full min-h-screen flex flex-col justify-center items-center gap-4"
  >
    <section class="flex justify-end w-full max-w-6xl px-4">
      <el-button type="success" @click="handleAdd"> Adicionar </el-button>
    </section>

    <section class="w-full max-w-6xl px-4">
      <el-table
        :data="filterTableData"
        style="width: 100%; height: 500px"
        align="center"
      >
        <el-table-column
          label="Data"
          prop="date"
          align="center"
          min-width="110"
          fixed
        >
          <template #default="scope">
            {{ formatDate(scope.row.date) }}
          </template>
        </el-table-column>
        <el-table-column
          label="Nome"
          prop="name"
          align="center"
          min-width="140"
        />
        <el-table-column
          label="Email"
          prop="email"
          align="center"
          min-width="140"
        />
        <el-table-column
          label="Nome do Animal"
          prop="animalName"
          align="center"
          min-width="110"
        />
        <el-table-column
          label="Período"
          prop="period"
          align="center"
          min-width="80"
        />
        <el-table-column align="center" min-width="160">
          <template #header>
            <el-input v-model="search" size="small" placeholder="Busca" />
          </template>
          <template #default="scope">
            <div class="">
              <el-button
                title="Detalhes"
                @click="handleShowDetails(scope.$index, scope.row)"
                :icon="View"
                size="small"
              />
              <el-button
                title="Editar"
                @click="handleEdit(scope.$index, scope.row)"
                :icon="Edit"
                size="small"
              />
              <el-button
                title="Deletar"
                @click="handleDelete(scope.$index, scope.row)"
                size="small"
                :icon="Delete"
                type="danger"
              />
            </div>
          </template>
        </el-table-column>
      </el-table>
    </section>

    <el-dialog
      v-model="dialogFormVisible"
      title="Shipping address"
      width="90%"
      style="max-width: 500px"
    >
      <el-form :model="form">
        <el-form-item label="Nome" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete />
        </el-form-item>

        <el-form-item label="Email" :label-width="formLabelWidth" type="email">
          <el-input v-model="form.email" autocomplete />
        </el-form-item>

        <el-form-item label="Nome do animal" :label-width="formLabelWidth">
          <el-input v-model="form.animalName" autocomplete />
        </el-form-item>

        <el-form-item label="Tipo do animal" :label-width="formLabelWidth">
          <el-input v-model="form.animalType" autocomplete />
        </el-form-item>

        <el-form-item label="Idade do animal" :label-width="formLabelWidth">
          <el-input v-model="form.animalAge" autocomplete type="number" />
        </el-form-item>

        <el-form-item label="Data" :label-width="formLabelWidth">
          <el-date-picker
            format="DD/MM/YYYY"
            v-model="form.date"
            type="date"
            placeholder="Selecione a data"
          />
        </el-form-item>

        <el-form-item label="Período" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="Selecione o turno">
            <el-option label="Manhã" value="manha" />
            <el-option label="Tarde" value="tarde" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancelar</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">
            Confirmar
          </el-button>
        </div>
      </template>
    </el-dialog>

    <el-dialog
      v-model="dialogDetailsVisible"
      title="Detalhes"
      width="90%"
      style="max-width: 500px"
    >
      <ul class="flex flex-col gap-2">
        <li>
          <span class="font-bold">Nome:<br /></span>
          {{ dialogDetailsData.name }}
        </li>
        <li>
          <span class="font-bold">Email:<br /></span>
          {{ dialogDetailsData.email }}
        </li>
        <li>
          <span class="font-bold">Nome do Animal:<br /></span>
          {{ dialogDetailsData.animalName }}
        </li>
        <li>
          <span class="font-bold">Tipo:<br /></span>
          {{ dialogDetailsData.animalType }}
        </li>
        <li>
          <span class="font-bold">Período:<br /></span>
          {{ dialogDetailsData.period }}
        </li>
        <li>
          <span class="font-bold">Sintomas:<br /></span>
          {{ dialogDetailsData.symptoms }}
        </li>
      </ul>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogDetailsVisible = false">Fechar</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { View, Delete, Edit } from "@element-plus/icons-vue";

definePageMeta({
  layout: "auth",
});

// modal showsymptoms
const dialogDetailsVisible = ref(false);
const dialogDetailsData = ref({});

//modal add e edit
const dialogFormVisible = ref(false);
const formLabelWidth = "140px";
const form = reactive({
  name: "",
  email: "",
  animalName: "",
  animalType: "",
  animalAge: 0,
  date: "",
});

//table
const search = ref("");
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
);

const resetForm = () => {
  form.name = "";
  form.email = "";
  form.animalName = "";
  form.animalType = "";
  form.animalAge = 0;
  form.date = "";
};

const handleAdd = () => {
  resetForm();
  dialogFormVisible.value = true;
};

const handleEdit = (index, row) => {
  console.log(index, row);

  resetForm();
  form.name = row.name;
  form.email = row.email;
  form.animalName = row.animalName;
  form.animalType = row.animalType;
  form.animalAge = row.animalAge;
  form.date = row.date;

  dialogFormVisible.value = true;
};

const handleDelete = (index, row) => {
  console.log(index, row);
};

const handleShowDetails = (index, row) => {
  console.log(index, row);
  dialogDetailsVisible.value = true;
  dialogDetailsData.value = {};
  dialogDetailsData.value = row;
};

const formatDate = (date) => {
  const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
  return new Date(date).toLocaleDateString('pt-BR', options);
};

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom Johnson",
    email: "tom@tom.com",
    animalName: "Rex",
    animalType: "Cachorro",
    animalAge: 2,
    period: "manha",
    symptoms:
      "Rex está apresentando tosse frequente e espirros constantes, especialmente durante a manhã. Além disso, ele parece estar mais letárgico do que o normal e perdeu um pouco do apetite.",
  },
  {
    date: "2017-06-15",
    name: "Jerry Smith",
    email: "jerry@jerry.com",
    animalName: "Whiskers",
    animalType: "Gato",
    animalAge: 3,
    period: "tarde",
    symptoms:
      "Whiskers não está comendo como de costume e parece estar perdendo peso. Ele também está se escondendo mais do que o normal e parece estar menos ativo.",
  },
  {
    date: "2018-07-20",
    name: "Spike Lee",
    email: "spike@spike.com",
    animalName: "Buddy",
    animalType: "Cachorro",
    idadeAnimal: 4,
    period: "noite",
    symptoms:
      "Buddy está se coçando intensamente e perdeu alguns pelos na área afetada. Ele também está lambendo a área constantemente, o que está causando irritação na pele.",
  },
  {
    date: "2019-08-25",
    name: "Tyke Brown",
    email: "tyke@tyke.com",
    animalName: "Mittens",
    animalType: "Gato",
    idadeAnimal: 1,
    period: "manha",
    symptoms:
      "Mittens vomitou várias vezes nos últimos dias e parece estar desidratado. Ele também está evitando a comida e a água, o que é incomum para ele.",
  },
  {
    date: "2020-09-30",
    name: "Butch Davis",
    email: "butch@butch.com",
    animalName: "Shadow",
    animalType: "Cachorro",
    idadeAnimal: 5,
    period: "tarde",
    symptoms:
      "Shadow está com diarreia há alguns dias e parece estar perdendo peso. Ele também está menos ativo e parece estar desconfortável, especialmente após comer.",
  },
  {
    date: "2021-10-05",
    name: "Nibbles Wilson",
    email: "nibbles@nibbles.com",
    animalName: "Snowball",
    animalType: "Coelho",
    idadeAnimal: 2,
    period: "noite",
    symptoms:
      "Snowball está letárgico e não está comendo como de costume. Ele também está respirando de forma pesada e parece estar desconfortável, especialmente quando se move.",
  },
  {
    date: "2022-11-10",
    name: "Tuffy Martinez",
    email: "tuffy@tuffy.com",
    animalName: "Goldie",
    animalType: "Peixe",
    idadeAnimal: 1,
    period: "manha",
    symptoms:
      "Goldie está nadando de lado e parece estar tendo dificuldade para se manter equilibrado. Ele também está menos ativo e não está comendo como de costume.",
  },
  {
    date: "2023-12-15",
    name: "Lightning Garcia",
    email: "lightning@lightning.com",
    animalName: "Flash",
    animalType: "Cavalo",
    idadeAnimal: 6,
    period: "tarde",
    symptoms:
      "Flash está mancando e parece estar com dor na perna direita. Ele também está menos disposto a se mover e parece estar desconfortável, especialmente ao caminhar.",
  },
  {
    date: "2024-01-20",
    name: "Quacker Hernandez",
    email: "quacker@quacker.com",
    animalName: "Daffy",
    animalType: "Pato",
    animalAge: 3,
    period: "noite",
    symptoms:
      "Daffy está com as penas eriçadas e parece estar com dificuldade para voar. Ele também está menos ativo e não está comendo como de costume, o que é preocupante.",
  },
  {
    date: "2025-02-25",
    name: "Muscles Robinson",
    email: "muscles@muscles.com",
    animalName: "Bruno",
    animalType: "Cachorro",
    animalAge: 4,
    period: "manha",
    symptoms:
      "Bruno está tossindo frequentemente e parece estar com dificuldade para respirar. Ele também está menos ativo e não está comendo como de costume, o que é preocupante.",
  },
  {
    date: "2026-03-30",
    name: "Toodles Clark",
    email: "toodles@toodles.com",
    animalName: "Bella",
    animalType: "Gato",
    animalAge: 2,
    period: "tarde",
    symptoms:
      "Bella está espirrando frequentemente e parece estar com dificuldade para respirar. Ela também está menos ativa e não está comendo como de costume, o que é preocupante.",
  },
];
</script>
