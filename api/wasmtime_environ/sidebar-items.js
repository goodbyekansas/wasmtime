initSidebarItems({"constant":[["INTERRUPTED","Sentinel value indicating that wasm has been interrupted."],["VERSION","Version number of this crate."],["WASM_MAX_PAGES","The number of pages we can have before we run out of byte index space."],["WASM_PAGE_SIZE","WebAssembly page sizes are defined to be 64KiB."]],"enum":[["CompileError","An error while compiling WebAssembly to machine code."],["Initializer","Initialization routines for creating an instance, encompassing imports, modules, instances, aliases, etc."],["MemoryStyle","Implemenation styles for WebAssembly linear memory."],["ModuleMemoryOffset","Memory definition offset in the VMContext structure."],["ModuleType","Different types that can appear in a module."],["RelocationTarget","Destination function. Can be either user function or some special one, like `memory.grow`."],["TableStyle","Implemenation styles for WebAssembly tables."]],"fn":[["reference_type","Returns the reference type to use for the provided wasm type."],["translate_signature","Add environment-specific function parameters."]],"macro":[["for_each_libcall","Iterates through all `LibCall` members and all runtime exported functions."],["foreach_builtin_function","Helper macro to iterate over all builtin functions and their signatures."]],"mod":[["entity",""],["ir",""],["isa",""],["settings",""],["wasm",""]],"struct":[["BuiltinFunctionIndex","An index type for builtin functions."],["CompiledFunction","Compiled function: machine code body, jump table offsets, and unwind information."],["DataInitializer","A data initializer for linear memory."],["DataInitializerLocation","A memory index and offset within that memory where a data initialization should is to be performed."],["DebugInfoData",""],["FunctionAddressMap","Function and its instructions addresses mappings."],["FunctionBodyData","Contains function data: byte code and its offset in the module."],["FunctionMetadata",""],["InstanceSignature","The type signature of known instances."],["InstructionAddressMap","Single source location to generated address mapping."],["MemoryPlan","A WebAssembly linear memory description along with our chosen style for implementing it."],["Module","A translated WebAssembly module, excluding the function bodies and memory initializers."],["ModuleEnvironment","Object containing the standalone environment information."],["ModuleSignature","The type signature of known modules."],["ModuleTranslation","The result of translating via `ModuleEnvironment`. Function bodies are not yet translated, and data initializers have not yet been copied out of the original buffer."],["NameSection",""],["Relocation","A record of a relocation to perform."],["StackMapInformation","The offset within a function of a GC safepoint, and its associated stack map."],["TableElements","A WebAssembly table initializer."],["TablePlan","A WebAssembly table description along with our chosen style for implementing it."],["TargetSharedSignatureIndex","Target specific type for shared signature index."],["TrapInformation","Information about trap."],["Tunables","Tunable parameters for WebAssembly compilation."],["TypeTables","All types which are recorded for the entirety of a translation."],["VMOffsets","This class computes offsets to fields within `VMContext` and other related structs that JIT code accesses directly."],["WasmFileInfo",""]],"trait":[["Compiler","An implementation of a compiler from parsed WebAssembly module to native code."]],"type":[["CompiledFunctions",""],["Dwarf",""]]});