/*
 *
 * Risk Inspector
 *
 * Copyright (C) 2024 Hedera Hashgraph, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

export const defaultWeights = {
  keys: {
    admin_key: 200,
    wipe_key: 200,
    freeze_key: 50,
    supply_key: 20,
    kyc_key: 50,
    pause_key: 50,
    fee_schedule_key: 40,
  },
  properties: {
    supply_type_infinite: 20,
  },
} as const;
